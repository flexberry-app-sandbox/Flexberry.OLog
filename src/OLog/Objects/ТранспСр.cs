﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.OLog
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Трансп ср.
    /// </summary>
    // *** Start programmer edit section *** (ТранспСр CustomAttributes)

    // *** End programmer edit section *** (ТранспСр CustomAttributes)
    [AutoAltered()]
    [Caption("Трансп ср")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТранспСрE", new string[] {
            "Марка as \'Марка\'",
            "ГосЗнак as \'Гос знак\'",
            "Модель as \'Модель\'"})]
    [View("ТранспСрL", new string[] {
            "Марка as \'Марка\'",
            "ГосЗнак as \'Гос знак\'",
            "Модель as \'Модель\'"})]
    public class ТранспСр : ICSSoft.STORMNET.DataObject
    {
        
        private string fМарка;
        
        private string fГосЗнак;
        
        private string fМодель;
        
        private IIS.OLog.Персонал fПерсонал;
        
        // *** Start programmer edit section *** (ТранспСр CustomMembers)

        // *** End programmer edit section *** (ТранспСр CustomMembers)

        
        /// <summary>
        /// ГосЗнак.
        /// </summary>
        // *** Start programmer edit section *** (ТранспСр.ГосЗнак CustomAttributes)

        // *** End programmer edit section *** (ТранспСр.ГосЗнак CustomAttributes)
        [StrLen(255)]
        public virtual string ГосЗнак
        {
            get
            {
                // *** Start programmer edit section *** (ТранспСр.ГосЗнак Get start)

                // *** End programmer edit section *** (ТранспСр.ГосЗнак Get start)
                string result = this.fГосЗнак;
                // *** Start programmer edit section *** (ТранспСр.ГосЗнак Get end)

                // *** End programmer edit section *** (ТранспСр.ГосЗнак Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТранспСр.ГосЗнак Set start)

                // *** End programmer edit section *** (ТранспСр.ГосЗнак Set start)
                this.fГосЗнак = value;
                // *** Start programmer edit section *** (ТранспСр.ГосЗнак Set end)

                // *** End programmer edit section *** (ТранспСр.ГосЗнак Set end)
            }
        }
        
        /// <summary>
        /// Марка.
        /// </summary>
        // *** Start programmer edit section *** (ТранспСр.Марка CustomAttributes)

        // *** End programmer edit section *** (ТранспСр.Марка CustomAttributes)
        [StrLen(255)]
        public virtual string Марка
        {
            get
            {
                // *** Start programmer edit section *** (ТранспСр.Марка Get start)

                // *** End programmer edit section *** (ТранспСр.Марка Get start)
                string result = this.fМарка;
                // *** Start programmer edit section *** (ТранспСр.Марка Get end)

                // *** End programmer edit section *** (ТранспСр.Марка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТранспСр.Марка Set start)

                // *** End programmer edit section *** (ТранспСр.Марка Set start)
                this.fМарка = value;
                // *** Start programmer edit section *** (ТранспСр.Марка Set end)

                // *** End programmer edit section *** (ТранспСр.Марка Set end)
            }
        }
        
        /// <summary>
        /// Модель.
        /// </summary>
        // *** Start programmer edit section *** (ТранспСр.Модель CustomAttributes)

        // *** End programmer edit section *** (ТранспСр.Модель CustomAttributes)
        [StrLen(255)]
        public virtual string Модель
        {
            get
            {
                // *** Start programmer edit section *** (ТранспСр.Модель Get start)

                // *** End programmer edit section *** (ТранспСр.Модель Get start)
                string result = this.fМодель;
                // *** Start programmer edit section *** (ТранспСр.Модель Get end)

                // *** End programmer edit section *** (ТранспСр.Модель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТранспСр.Модель Set start)

                // *** End programmer edit section *** (ТранспСр.Модель Set start)
                this.fМодель = value;
                // *** Start programmer edit section *** (ТранспСр.Модель Set end)

                // *** End programmer edit section *** (ТранспСр.Модель Set end)
            }
        }
        
        /// <summary>
        /// Трансп ср.
        /// </summary>
        // *** Start programmer edit section *** (ТранспСр.Персонал CustomAttributes)

        // *** End programmer edit section *** (ТранспСр.Персонал CustomAttributes)
        [PropertyStorage(new string[] {
                "Персонал"})]
        [NotNull()]
        public virtual IIS.OLog.Персонал Персонал
        {
            get
            {
                // *** Start programmer edit section *** (ТранспСр.Персонал Get start)

                // *** End programmer edit section *** (ТранспСр.Персонал Get start)
                IIS.OLog.Персонал result = this.fПерсонал;
                // *** Start programmer edit section *** (ТранспСр.Персонал Get end)

                // *** End programmer edit section *** (ТранспСр.Персонал Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТранспСр.Персонал Set start)

                // *** End programmer edit section *** (ТранспСр.Персонал Set start)
                this.fПерсонал = value;
                // *** Start programmer edit section *** (ТранспСр.Персонал Set end)

                // *** End programmer edit section *** (ТранспСр.Персонал Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТранспСрE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТранспСрE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТранспСрE", typeof(IIS.OLog.ТранспСр));
                }
            }
            
            /// <summary>
            /// "ТранспСрL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТранспСрL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТранспСрL", typeof(IIS.OLog.ТранспСр));
                }
            }
        }
    }
}
